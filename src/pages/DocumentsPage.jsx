import React, { useState, useRef } from "react";
import DocumentCard from "@/components/DocumentCard";
import PageTitle from "@/components/PageTitle";
import { Plus, ChevronRight, Type, Scan } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import InputBox from "@/components/InputBox";
import { PlusIcon } from "lucide-react";

const DocumentsPage = () => {
  const [drawerContent, setDrawerContent] = useState(null);
  const [drawerTitle, setDrawerTitle] = useState("Add files");
  const [files, setFiles] = useState(null);

  const insuranceRef = useRef(null);
  const hospitalReportRef = useRef(null);
  const otherDocsRef = useRef(null);
  const scanDocRef = useRef(null);

  const scanDocument = () => {
    scanDocRef.current.click();
  }

  const inputPrescription = () => {
    setDrawerContent(
      <div className="pt-10 flex flex-col gap-8">
        <InputBox placeholder="Product Name" value="Insulin 40IU/ml Injection"/>
        <InputBox placeholder="Frequency" value="3"/>
        <button className=" w-full flex flex-row gap-1 justify-center items-center">
          <PlusIcon size={20} color="#707070"/>
          <p className="text-[#707070] text-base">add more details</p>
        </button>
        <button className="w-full rounded-2xl bg-[#1A4CD3] py-4">
          Confirm
        </button>
      </div>
    )
  }

  const resetDrawerContent = () => {
    setDrawerTitle("Add files");
    setDrawerContent(
      <div>
        <button
          onClick={() => setDrawerContentToDocs()}
          className="flex items-center justify-between py-6 w-full"
        >
          <p className=" font-medium text-xl">Document</p>
          <ChevronRight />
        </button>
        <hr color="#4E4E4E" />

        <button
          onClick={() => setDrawerContentToPrescription()}
          className="flex items-center justify-between py-6 w-full"
        >
          <p className=" font-medium text-xl">Prescription</p>
          <ChevronRight />
        </button>
        <hr color="#4E4E4E" />
      </div>
    );
  };

  const setDrawerContentToDocs = () => {
    const handleFileButtonClick = (ref) => {
      ref.current.click();
    };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setFiles(file);
    };

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
            onClick={() => handleFileButtonClick(insuranceRef)}
            className="flex items-center justify-between py-6 w-full"
          >
            <p className="text-base">Insurance</p>
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
            onClick={() => handleFileButtonClick(hospitalReportRef)}
            className="flex items-center justify-between py-6 w-full"
          >
            <p className="text-base">Hospital Report</p>
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
            onClick={() => handleFileButtonClick(otherDocsRef)}
            className="flex items-center justify-between py-6 w-full"
          >
            <p className="text-base">Other Documents</p>
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
          <button onClick={inputPrescription} className=" w-28 h-28 bg-[#2F2F40] rounded-lg flex flex-col justify-center items-center">
            <Type size={35} />
            <p className=" text-sm">Type</p>
          </button>
          <button
          onClick={scanDocument}
            className=" w-28 h-28 bg-[#2F2F40] rounded-lg flex flex-col justify-center items-center"
          >
            <Scan size={35} />
            <p className=" text-sm">Scan</p>
            <input ref={scanDocRef} type="file" className=" hidden"/>
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="px-4 pb-44">
        <PageTitle title="Documents" />
        <div className="flex flex-col gap-5 pt-6">
          <DocumentCard
            type="Life Insurance"
            name="Aster MIMS"
            date="03-10-2023"
          />
          <DocumentCard type="Life Insurance" name="Aster MIMS" />
          <DocumentCard
            type="Life Insurance"
            name="Aster MIMS"
            date="03-10-2023"
          />
          <DocumentCard
            type="Life Insurance"
            name="Aster MIMS"
            date="03-10-2023"
          />
          <DocumentCard type="Life Insurance" name="Aster MIMS" />
          <DocumentCard type="Life Insurance" name="Aster MIMS" />
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
    </>
  );
};

export default DocumentsPage;
