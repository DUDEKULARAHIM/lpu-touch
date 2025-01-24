import Sheet from "react-modal-sheet";
import { useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import MessPass from "../../utils/MessPass";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MyBottomSheet(props) {
  const navigate = useNavigate();
  const { mealType } = useParams();
  const { sheetOpen } = props;
  const { messType } = useParams();
  const [isOpen, setOpen] = useState(sheetOpen);
  const ref = useRef();
  const snapTo = (i) => ref.current?.snapTo(i);

  const customHeader = (
    <>
      <div className=" flex   items-center   relative   bg-[#323232] h-14">
        <div className="flex flex-col items-center justify-center relative     ">
          <div className=" bg-white/70 w-9 h-1 rounded-lg absolute -top-3 "></div>
          <p className="text-white/90  text-sm">Mess Pass</p>
        </div>
        <button
          onClick={() => {
            setOpen(false);
            if(messType==="Mess BH-3"){
              navigate(`/mess`);
            }
            else if(messType==="Mess-Centre-02"){
              navigate(`/central`); // Corrected implementation
            }
            else if(messType==="Mess-Centre-01"){
              navigate(`/north`); // Corrected implementation
            }
          }}
          className="p-2 absolute left-[10rem] "
        >
          <AiOutlineClose className=" text-white/90" />
        </button>
      </div>
    </>
  );

  return (
    <>
      <Sheet
        ref={ref}
        isOpen={isOpen}
        disableScrollLocking={true}
        onClose={() => setOpen(false)}
        snapPoints={[-20, 1, 400]}
        initialSnap={1}
        style={{
          backgroundColor: "white",
          position: "unset",
        }}
      >
        <Sheet.Container>
          <Sheet.Content
            className=" "
            style={{
              backgroundColor: "#f9f9f9",
            }}
          >
            <Sheet.Header
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#323232",
                width: "100%",
              }}
            >
              {customHeader}
            </Sheet.Header>
            <MessPass mealType={mealType} messType={messType}  />
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}

export default MyBottomSheet;
