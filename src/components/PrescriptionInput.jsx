import React, { useState } from "react";
import { PlusIcon } from "lucide-react";
import InputBox from "./InputBox";
import { useEffect } from "react";
import { db } from "@/config/firebase";
import userStore from "@/store/userStore";
import { doc, getDoc, updateDoc, arrayUnion, setDoc } from "firebase/firestore";

const PrescriptionInput = () => {
  const [medicineName, setMedicineName] = useState("");
  const [frequency, setFrequency] = useState("");
  const { user } = userStore();

  const handleMedicineChange = (e) => {
    setMedicineName(e.target.value);
  };
  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  useEffect(() => {
    if (frequency > 7) {
      alert("Check your prescription");
      setFrequency(0);
    }
  }, [frequency]);

  const uploadPrescriptionDetails = async () => {
    // check all fields are
    if (!medicineName) {
      alert("Enter your medicine name");
    }
    if (!frequency) {
      alert("Enter the frequency of medicine");
    }

    if (medicineName && frequency) {
      const newPrescription = {
        medicineName: medicineName,
        frequency: frequency,
        dose: "",
        remarks: "",
      };

      // Reference to the user's prescription document
      const userPrescriptionDocRef = doc(db, "prescriptions", user.uid);

      // Fetch the document to see if it exists and get current prescriptions
      const docSnap = await getDoc(userPrescriptionDocRef);

      if (docSnap.exists()) {
        // Document exists, update the prescriptions array
        await updateDoc(userPrescriptionDocRef, {
          prescriptions: arrayUnion(newPrescription),
        });
      } else {
        // Document doesn't exist, create it with the new prescription as the first item
        await setDoc(userPrescriptionDocRef, {
          prescriptions: [newPrescription],
        });
      }
      setFrequency("");
      setMedicineName("");
    }
  };

  return (
    <>
      <div className="pt-10 flex flex-col gap-8">
        <InputBox
          placeholder="Medicine Name"
          value={medicineName}
          onChange={handleMedicineChange}
          type="text"
        />
        <InputBox
          placeholder="Frequency"
          value={frequency}
          onChange={handleFrequencyChange}
          type="number"
        />
        <button className=" w-full flex flex-row gap-1 justify-center items-center">
          <PlusIcon size={20} color="#707070" />
          <span className="text-[#707070] text-base">add more details</span>
        </button>
        <button
          onClick={uploadPrescriptionDetails}
          className="w-full rounded-2xl bg-[#1A4CD3] py-4"
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default PrescriptionInput;
