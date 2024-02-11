import  { useState, useRef } from "react";
import DocumentCard from "@/components/DocumentCard";
import PageTitle from "@/components/PageTitle";
import { Plus, ChevronRight, Type, Scan } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import InputBox from "@/components/InputBox";
import { PlusIcon } from "lucide-react";
import { storage } from "@/config/firebase";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  listAll,
  getMetadata,
} from "firebase/storage";
import userStore from "@/store/userStore";
import PrescriptionInput from "@/components/PrescriptionInput";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import axios from "axios";

function getTypeOfDocument(name) {
  if (name === "insurance") return "insurance";
  if (name === "hospital_report") return "Hospital Report";
  if (name === "other_docs") return "Other Documents";
}


const DocumentsPage = () => {
  const [drawerContent, setDrawerContent] = useState(null);
  const [drawerTitle, setDrawerTitle] = useState("Add files");
  const [files, setFiles] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [previewUrl, setPreviewUrl] = useState("");
  const [, setDocUrl] = useState(null);
  const [uploadFileType, setUploadFileType] = useState("");
  const [insuranceDocs, setInsuranceDocs] = useState([]);
  const [hospitalReportDocs, setHospitalReportDocs] = useState([]);
  const [otherDocs, setOtherDocs] = useState([]);
  const [loading, setLoading] = useState(false);

  const [medicineName, setMedicineName] = useState("");
  const [frequency, setFrequency] = useState("");

  const insuranceRef = useRef(null);
  const hospitalReportRef = useRef(null);
  const otherDocsRef = useRef(null);
  const scanDocRef = useRef(null);

  const { user } = userStore();

  const handleFileButtonClick = (ref, fileType) => {
    setUploadFileType(fileType);
    ref.current.click();
  };

  const uploadScannedPrescription = (event) => {
    console.log(event);
    setUploadFileType("prescription");
    handleFileChange(event);
    uploadDocument();
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (!file) return;

    console.log(file);
    setFiles(file);

    const localPreviewUrl = URL.createObjectURL(file);

    // You can now use this URL to display the file in your UI, for example:
    console.log("Preview URL:", localPreviewUrl);

    setPreviewUrl(localPreviewUrl);
  };

  const uploadDocument = (documentType) => {
    const storageRef = ref(storage, `${documentType}/${files.name}`);
    const uploadTask = uploadBytesResumable(storageRef, files);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgresspercent(progress);
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setDocUrl(downloadURL);
          setPreviewUrl("");
          setProgresspercent(0);

          if (uploadFileType === "prescription") {
            console.log(uploadFileType);
            console.log(downloadURL);
            console.log("call to vision API");
            axios.post("http://localhost:5000/get-prescription", {
              "prescription_image": downloadURL,
            }).then((res) => console.log(res.data)).catch(err => console.log(err));
          }else{
            window.location.reload()
          }
        })
      }
    );
  };

  useEffect(() => {
    const fetchDocuments = async (name) => {
      const documentFiles = ref(storage, `${user?.uid}/documents/${name}`);
      const list = await listAll(documentFiles);
      let documentUrls = [];
      for (let i = 0; i < list.items.length; i++) {
        const url = await getDownloadURL(list.items[i]);
        documentUrls.push({
          url: url,
          name: list.items[i].name,
          type: getTypeOfDocument(name),
          uploadedOn: (await getMetadata(list.items[i])).timeCreated,
        });
      }
      return documentUrls;
    };
    setLoading(true);
    Promise.all([
      fetchDocuments("insurance").then((data) => setInsuranceDocs(data)),
      fetchDocuments("hospital_report").then((data) =>
        setHospitalReportDocs(data)
      ),
      fetchDocuments("other_docs").then((data) => setOtherDocs(data)),
    ]).then(() => setLoading(false));
  }, [user?.uid]);

  const allDocs = [...insuranceDocs, ...hospitalReportDocs, ...otherDocs];
  // name dose, frequency, remarks


  const scanDocument = () => {
    scanDocRef.current.click();
  };

  const inputPrescription = () => {
    const handleChange = (e) => {
      setMedicineName(e.target.value);
    };

    setDrawerContent(<PrescriptionInput />);
  };

  const resetDrawerContent = () => {
    setDrawerTitle("Add files");
    setDrawerContent(
      <div>
        <button
          onClick={() => setDrawerContentToDocs()}
          className="flex items-center justify-between py-6 w-full"
        >
          <span className=" font-medium text-xl">Document</span>
          <ChevronRight />
        </button>
        <hr color="#4E4E4E" />

        <button
          onClick={() => setDrawerContentToPrescription()}
          className="flex items-center justify-between py-6 w-full"
        >
          <span className=" font-medium text-xl">Prescription</span>
          <ChevronRight />
        </button>
        <hr color="#4E4E4E" />
      </div>
    );
  };

  const setDrawerContentToDocs = () => {
    setDrawerContent(
      <div>
        <div>
          <input
            ref={insuranceRef}
            type="file"
            className=" hidden"
            onChange={handleFileChange}
          />
          <button
            onClick={() =>
              handleFileButtonClick(insuranceRef, "documents/insurance")
            }
            className="flex items-center justify-between py-6 w-full"
          >
            <span className="text-base">Insurance</span>
            <ChevronRight />
          </button>
          <hr color="#4E4E4E" />
        </div>

        <div>
          <input
            ref={hospitalReportRef}
            type="file"
            className=" hidden"
            onChange={handleFileChange}
          />
          <button
            onClick={() =>
              handleFileButtonClick(
                hospitalReportRef,
                "documents/hospital_report"
              )
            }
            className="flex items-center justify-between py-6 w-full"
          >
            <span className="text-base">Hospital Report</span>
            <ChevronRight />
          </button>
          <hr color="#4E4E4E" />
        </div>

        <div>
          <input
            ref={otherDocsRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            onClick={() =>
              handleFileButtonClick(otherDocsRef, "documents/other_docs")
            }
            className="flex items-center justify-between py-6 w-full"
          >
            <span className="text-base">Other Documents</span>
            <ChevronRight />
          </button>
          <hr color="#4E4E4E" />
        </div>
      </div>
    );
  };

  const setDrawerContentToPrescription = () => {
    setDrawerTitle("Add prescription");
    setDrawerContent(
      <div>
        <h4 className=" text-lg font-medium pt-5">Choose input</h4>
        <div className="flex justify-evenly items-center pt-10">
          <button
            onClick={inputPrescription}
            className=" w-28 h-28 bg-[#2F2F40] rounded-lg flex flex-col justify-center items-center"
          >
            <Type size={35} />
            <p className=" text-sm">Type</p>
          </button>
          <button
            onClick={scanDocument}
            className=" w-28 h-28 bg-[#2F2F40] rounded-lg flex flex-col justify-center items-center"
          >
            <Scan size={35} />
            <p className=" text-sm">Scan</p>
            <input
              onChange={uploadScannedPrescription}
              ref={scanDocRef}
              type="file"
              className="hidden"
            />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="px-4 pb-40">
        <PageTitle title="Documents" />
        <div className="flex flex-col gap-5 pt-6">
          {loading && (
            <Loader2 className="w-10 h-10 animate-spin mx-auto mt-8" />
          )}
          {!loading &&
            allDocs.map((doc, index) => (
              <DocumentCard
                key={index}
                type={doc.name.split(".")[0]}
                name={doc.type}
                date={new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                }).format(new Date(doc.uploadedOn))}
                url={doc.url}
              />
            ))}
            {!loading && allDocs.length === 0 && (
              <>
              <h2 className="text-center text-red-800">No Documents Uploaded</h2>
              </>
            )}
        </div>

        <Drawer>
          <DrawerTrigger>
            <button
              onClick={resetDrawerContent}
              className=" bg-[#1A4CD3] w-14 h-14 flex justify-center place-items-center rounded fixed bottom-24 right-4"
            >
              <Plus size={30} />
            </button>
          </DrawerTrigger>

          <DrawerContent className="bg-[#1C1E27] rounded-2xl h-fit border-none">
            <DrawerHeader>
              <DrawerTitle className=" text-left">
                <PageTitle title={drawerTitle} />
              </DrawerTitle>
              <DrawerDescription>{drawerContent}</DrawerDescription>
            </DrawerHeader>
            {/* <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </div>

      {previewUrl && (
        <div className="fixed top-0 w-full h-[100%] bg-[#000000be] flex flex-col px-4 gap-3 items-center justify-center">
          <img src={previewUrl} alt="" width="260px" />
          <button
            onClick={() => {
              console.log(uploadFileType);
              uploadDocument(`${user?.uid}/${uploadFileType}`);
            }}
            className="bg-[#1A4CD3] py-4 px-8 rounded-2xl"
          >
            Upload
          </button>
          {progresspercent && (
            <div className="mt-5 w-[50%] h-[10px] bg-white rounded-lg">
              <div
                style={{ width: `${progresspercent}px` }}
                className=" h-full bg-blue-800 rounded-lg"
              ></div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DocumentsPage;
