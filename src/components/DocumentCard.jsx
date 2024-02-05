import React from "react";
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
import PageTitle from "./PageTitle";
import { Pin, Share2, Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const DocumentCard = ({ type, name, date, url }) => {
  return (
    <div className="w-full h-fit p-5 rounded-2xl bg-[#1C1E27] flex justify-between items-center">
      <Link target="_blank" to={url}>
        <div className="flex gap-2">
          <img src="/icons/document.svg" alt="document-icon" />
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-medium">{type}</h4>
            <p className="text-xs">
              {name} {date ? `| Dated: ${date}` : ""}
            </p>
          </div>
        </div>
      </Link>

      <Drawer>
        <DrawerTrigger>
          <button>
            <img src="/icons/dots.svg" alt="dots" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="bg-[#1C1E27] rounded-2xl h-[60%] border-none">
          <DrawerHeader>
            <DrawerTitle className="text-left">
              <PageTitle title="Health Insurance" />
            </DrawerTitle>
            <DrawerDescription>
              <div>
                <div>
                  <button className="flex items-center py-6 w-full gap-4">
                    <Pin />
                    <p className=" font-medium text-xl">Pin to home</p>
                  </button>
                  <hr color="#4E4E4E" />
                </div>
                <div>
                  <button className="flex items-center py-6 w-full gap-4">
                    <Share2 />
                    <p className=" font-medium text-xl">Share</p>
                  </button>
                  <hr color="#4E4E4E" />
                </div>
                <div>
                  <button className="flex items-center py-6 w-full gap-4">
                    <Pencil />
                    <p className=" font-medium text-xl">Rename</p>
                  </button>
                  <hr color="#4E4E4E" />
                </div>
                <div>
                  <button className="flex items-center py-6 w-full gap-4">
                    <Trash />
                    <p className=" text-red-600 font-medium text-xl">Delete</p>
                  </button>
                  <hr color="#4E4E4E" />
                </div>
              </div>
            </DrawerDescription>
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
  );
};

export default DocumentCard;
