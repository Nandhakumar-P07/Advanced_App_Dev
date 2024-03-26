import React, { useState, useEffect } from "react";
import { Tooltip } from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";
import Services from "../../../Service/Services";
const ApprovalRequests = () => {
  const [activesection, setActivesection] = useState("pending");

  const [showelement, setShowelement] = useState("");

  const [loans, setLoans] = useState([]);

  const handleSetActive = (option) => {
    setActivesection(option);
    if (option === "pending") setShowelement(0);
    else if (option === "approved") setShowelement(1);
    else if (option === "disapproved") setShowelement(2);
  };

  useEffect(() => {
    Services.getloans()
      .then((res) => {
        setLoans(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [loans]);

  return (
    <div>
      <main>
        {loans ? (
          <section className="grid  ">
            <div className="xl:w-[64em] relative xl:top-[7em] lg:top-[5em]  p-8 flex flex-col gap-8  items-start xl:left-[21em]  bg-white shadow-lg rounded-xl ">
              <p className="w-full text-darkteal font-bold  text-2xl">
                User Loan Approval
              </p>
              <div className="flex items-center   border-lightgray1 border-b-[1px]  w-full text-darkteal">
                <button
                  onClick={() => handleSetActive("pending")}
                  className={`  font-bold px-4 py-[8px]   ${
                    activesection === "pending"
                      ? "bg-darkteal text-white border rounded-t-xl "
                      : "bg-white text-black"
                  } `}>
                  Pending loans
                </button>
                <button
                  onClick={() => handleSetActive("approved")}
                  className={`  px-4 py-[8px] font-bold   ${
                    activesection === "approved"
                      ? "bg-darkteal text-white border rounded-t-xl "
                      : "bg-white text-black"
                  } `}>
                  Approved loans
                </button>
                <button
                  onClick={() => handleSetActive("disapproved")}
                  className={`  px-4 py-[8px] font-bold   ${
                    activesection === "disapproved"
                      ? "bg-darkteal text-white border rounded-t-xl "
                      : "bg-white text-black"
                  } `}>
                  Disapproved loans
                </button>
              </div>

              {showelement == 0 ? (
                <>
                  <div className="w-full font-bold text-darkteal flex  border-b-[2px] py-3 border-gray ">
                    <div className="flex items-start ">
                      <tr>Loans</tr>
                    </div>
                    <div className="  w-full  flex justify-end">
                      <div className="flex gap-5 xl:mr-16">
                        <tr className="">Amount</tr>
                        <tr>Status</tr>
                      </div>

                      {/* <tr className="">Edit</tr> */}
                      <div className="mr-6">
                        <tr>Action</tr>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col lg:gap-20 gap-5">
                    {loans?.map((loan, index) => (
                      <>
                        {loan.isEnabled === 0 ? (
                          <div className="flex lg:flex-col xl:w-full  xl:pb-12 items-center  justify-between ">
                            <div className="flex lg:flex-col xl:items-center gap-3">
                              <figure>
                                <img
                                  className="xl:w-20 lg:w-full rounded-md"
                                  src={loan.image}
                                  alt=""
                                />
                              </figure>
                              <div className="text-darkteal  gap-2 flex flex-col">
                                <div>
                                  <p className="font-bold"> {loan.title}</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                  <p className="flex gap-2 text-textgray">
                                    <span>
                                      <i class="fa-solid fa-leaf"></i>
                                    </span>
                                  </p>
                                  <span className="text-textgray">&#183;</span>
                                  <p className="flex gap-2 text-textgray">
                                    <span>
                                      <i class="fa-solid fa-comments"></i>
                                    </span>
                                  </p>
                                  <span className="text-textgray">&#183;</span>
                                  <p className="flex gap-2 text-textgray">
                                    <span>
                                      <i class="fa-solid fa-tag"></i>
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex  lg:w-full lg:justify-start   xl:justify-end mr-2  items-center gap-16 text-darkteal">
                              <div>
                                <span>₹0</span>
                              </div>
                              {loan.isEnabled == 0 ? (
                                <Tooltip
                                  className="bg-white text-black font-bold font-productsansb text-sm border-[#eeeeee] border-[1px] py-3"
                                  content="approval pending"
                                  placement="top">
                                  <div className="h-3 w-3   rounded-full bg-darkteal"></div>
                                </Tooltip>
                              ) : (
                                <div className="h-3 w-3   rounded-full bg-brightgreen"></div>
                              )}
                              <div className="flex items-center gap-12">
                                <Tooltip
                                  className="bg-white text-black font-bold font-productsansb text-sm border-[#eeeeee] border-[1px] py-3"
                                  content="approve campaign"
                                  placement="top">
                                  <span
                                    onClick={() => handleApproveLoan(loan.id)}
                                    className="">
                                    <i class="fa-solid fa-check-to-slot"></i>{" "}
                                  </span>
                                </Tooltip>

                                <Tooltip
                                  className="bg-white text-black font-bold font-productsansb text-sm border-[#eeeeee] border-[1px] py-3"
                                  content="disapprove campaign"
                                  placement="top">
                                  <span
                                    onClick={() =>
                                      handleDisapproveLoan(loan.id)
                                    }
                                    className="text-darkteal">
                                    <i class="fa-solid fa-circle-xmark"></i>
                                  </span>
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </>
                    ))}
                  </div>
                </>
              ) : showelement == 1 ? (
                <>
                  <div className="w-full font-bold text-darkteal flex  border-b-[2px] py-3 border-gray ">
                    <div className="flex items-start ">
                      <tr>Loan</tr>
                    </div>
                    <div className="  w-full gap-8 flex justify-end">
                      <div className="flex gap-5 ">
                        <tr className="">Amount</tr>
                        <tr>Status</tr>
                      </div>

                      {/* <tr className="">Edit</tr> */}
                      <div className="">
                        <tr>Action</tr>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col lg:gap-20 gap-5">
                    {loans?.map((loan, index) => (
                      <>
                        {loan.isEnabled === 1 ? (
                          <div className="flex lg:flex-col lg:gap-3 xl:w-full  xl:pb-12 items-center  justify-between ">
                            <div className="flex lg:flex-col xl:items-center gap-3">
                              <div className="text-darkteal  gap-2 flex flex-col">
                                <div>
                                  <p className="font-bold"> {loan.type}</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                  <p className="flex gap-2 text-textgray">
                                    <span>
                                      <i class="fa-solid fa-leaf"></i>
                                    </span>
                                    <span>
                                      ₹{loan.loanAmount ? "0" : ""} Loan Amount
                                    </span>
                                  </p>
                                  <span className="text-textgray">&#183;</span>

                                  <span className="text-textgray">&#183;</span>
                                  <p className="flex gap-2 text-textgray">
                                    <span>
                                      <i class="fa-solid fa-tag"></i>
                                    </span>

                                    <span>{loan.type}</span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex  lg:w-full   lg:justify-start    xl:justify-end xl:mr-2  items-center gap-16 text-darkteal">
                              <div>
                                <span>₹0</span>
                              </div>
                              {loan.isEnabled == 0 ? (
                                <Tooltip
                                  className="bg-white text-black font-bold font-productsansb text-sm border-[#eeeeee] border-[1px] py-3"
                                  content="approval pending"
                                  placement="top">
                                  <div className="h-3 w-3   rounded-full bg-darkteal"></div>
                                </Tooltip>
                              ) : (
                                <Tooltip
                                  className="bg-white text-black font-bold font-productsansb text-sm border-[#eeeeee] border-[1px] py-3"
                                  content="approved"
                                  placement="top">
                                  <div className="h-3 w-3   rounded-full bg-brightgreen"></div>
                                </Tooltip>
                              )}
                              <div className="flex items-center gap-12">
                                <Tooltip
                                  className="bg-white text-black font-bold font-productsansb text-sm border-[#eeeeee] border-[1px] py-3"
                                  content="disapprove campaign"
                                  placement="top">
                                  <span
                                    onClick={() =>
                                      handleDisapproveLoan(loan.id)
                                    }
                                    className="text-lg">
                                    <i class="fa-solid fa-square-xmark"></i>
                                  </span>
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full font-bold text-darkteal flex  border-b-[2px] py-3 border-gray ">
                    <div className="flex items-start ">
                      <tr>Loans</tr>
                    </div>
                    <div className="  w-full gap-8 flex justify-end">
                      <div className="flex gap-5 ">
                        <tr className="">Amount</tr>
                        <tr>Status</tr>
                      </div>

                      {/* <tr className="">Edit</tr> */}
                      <div className="">
                        <tr>Action</tr>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col lg:gap-20 gap-5">
                    {loans?.map((loan, index) => (
                      <>
                        {loan.isEnabled === 2 ? (
                          <div className="flex lg:flex-col xl:w-full  xl:pb-12 items-center  justify-between ">
                            <div className="flex lg:flex-col  xl:items-center gap-3">
                              <div className="text-darkteal  gap-2 flex flex-col">
                                <div>
                                  <p className="font-bold"> {loan.type}</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                  <p className="flex gap-2 text-textgray">
                                    <span>
                                      <i class="fa-solid fa-leaf"></i>
                                    </span>
                                    <span>
                                      ₹{loan.loanAmount ? "0" : ""} Loan amount
                                    </span>
                                  </p>
                                  <span className="text-textgray">&#183;</span>

                                  <span className="text-textgray">&#183;</span>
                                  <p className="flex gap-2 text-textgray">
                                    <span>
                                      <i class="fa-solid fa-tag"></i>
                                    </span>

                                    <span>{loan.type}</span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex lg:w-full  lg:justify-start    xl:justify-end mr-2  items-center gap-16 text-darkteal">
                              <div>
                                <span>₹0</span>
                              </div>
                              {loan.isEnabled == 2 ? (
                                <Tooltip
                                  className="bg-white text-black font-bold font-productsansb text-sm border-[#eeeeee] border-[1px] py-3"
                                  content="disapproved"
                                  placement="top">
                                  <div className="h-3 w-3   rounded-full bg-red"></div>
                                </Tooltip>
                              ) : (
                                <div className="h-3 w-3   rounded-full bg-brightgreen"></div>
                              )}
                              <div className="flex items-center gap-12">
                                <Tooltip
                                  className="bg-white text-black font-bold font-productsansb text-sm border-[#eeeeee] border-[1px] py-3"
                                  content="approve campaign"
                                  placement="top">
                                  <span
                                    onClick={() =>
                                      handleApproveCampaign(loan.id)
                                    }
                                    className="">
                                    <i class="fa-solid fa-check-to-slot"></i>
                                  </span>
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        ) : (
          <section className="grid bg-backgroundwhite place-content-center h-screen">
            <div className="xl:w-[60em]  p-8 flex flex-col items-center xl:ml-52 mt-20  bg-white shadow-xl rounded-xl ">
              <p className="  font-bold text-2xl"> Loan Details</p>
              <figure>
                {/* <img width={398.36} height={398.36} src={empty} alt="" /> */}
              </figure>
              <p className="font-bold font-productsansb text-2xl text-teal">
                No Loans found
              </p>
              <p className="text-textgray text-sm">
                We're sorry,no loan requests have been submited yet.
              </p>
            </div>
          </section>
        )}
      </main>
      <Toaster
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ApprovalRequests;
