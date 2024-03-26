import React,{useState} from "react";
import Services from "../../../Service/Services";
import toast, { Toaster } from "react-hot-toast";

const ApplyloanSection = () => {

  const [loanData, setLoanData] = useState({
    type: "",
    loanAmount:0,
    duration:0,
    isEnabled : 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanData({
      ...loanData,
      [name]: value,
    });
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      type: loanData.type,
    loanAmount: loanData.loanAmount,
    duration : loanData.duration,
    isEnabled : 0,
    };
    console.log(formData);

    await Services.ApplyLoan(formData)
      .then((res) => {
        toast.custom((t) => (
          <div
            className={`bg-[#55ba45] text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${
              t.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } duration-300 ease-in-out`}>
            <div className="flex items-center gap-2 text-white">
              <span>
                <i class="fa-solid fa-circle-check"></i>{" "}
              </span>
              <div>
                <span className=" ">
                  Details updated successfully.Please check your details!
                </span>
              </div>
            </div>
          </div>
        ));
        console.log(formData);
      })
      .catch((err) => {
        toast.custom((t) => (
          <div
            className={`bg-[#ff5e5b] text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${
              t.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } duration-300 ease-in-out`}>
            <div className="flex items-center gap-2 text-white">
              <span>
                <i class="fa-solid text-xl fa-circle-xmark"></i>
              </span>
              <div>
                <span className="">
                  Could not update details.Please try again later!
                </span>
              </div>
            </div>
          </div>
        ));
      });
  };

  return (
    <div className="pl-[23rem] pt-[8rem] bg-gray">
      <div className="text-black">
        <p className="text-2xl font-ambitbold">Loan Application</p>{" "}
        <p className="text-[#8094ae] text-sm">
          {" "}
          Please complete the application neatly & included all information,
          documentation, identification required
        </p>
      </div>
      <div className=" border border-gray bg-white w-[80%] rounded-xl px-4 pr-[2rem] py-4 flex flex-col gap-4">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1  justify-between w-full">
            <p>Full Name</p>
            <input
              placeholder="eg.Nandha"
              className="w-[20rem] px-2 py-1 border border-gray border-[2px] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-3  justify-start">
            <p>Date of birth</p>
            <input
              placeholder="dd/mm/yyyy"
              className="w-[20rem] px-2 py-1 border border-gray border-[2px] rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-3  justify-start">
            <p>Area/Location</p>
            <input
              placeholder="eg.Nandha"
              className="w-[20rem] px-2 py-1 border border-gray border-[2px] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-3  justify-start">
            <p>City</p>
            <input
              placeholder="eg.CBE"
              className="w-[20rem] px-2 py-1 border border-gray border-[2px] rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-3  justify-start">
            <p>Country</p>
            <input
              placeholder="eg.India"
              className="w-[20rem] px-2 py-1 border border-gray border-[2px] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-3  justify-start">
            <p>Nearest Branch</p>
            <input
              placeholder="eg.CBE"
              className="w-[20rem] px-2 py-1 border border-gray border-[2px] rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-3  justify-start">
            <p>Phone number</p>
            <input
              placeholder="eg. +91 976543210"
              className="w-[20rem] px-2 py-1 border border-gray border-[2px] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-3  justify-start">
            <p>Email</p>
            <input
              placeholder="eg.agrofundx@gmail.com"
              className="w-[20rem] px-2 py-1 border border-gray border-[2px] rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-3  justify-start">
            <p>Profession</p>
            <input
              placeholder="eg. Business"
              className="w-[20rem] px-2 py-1 border border-gray border-[2px] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-3  justify-start">
            <p>What Type of Loan do you need?</p>
            <input
              placeholder="eg.Agri" name="type"
              className="w-[20rem] px-2 py-1 border border-gray border-[2px] rounded-lg"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-3  justify-start">
            <p>Monthly income from other sources in INR (if any)</p>
            <input
              placeholder="eg. 10,000"
              className="w-[20rem] px-2 py-1 border border-gray border-[2px] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-3  justify-start">
            <p>Requested Loan Amount</p>
            <input
              placeholder="eg. 50,000" name="loanAmount"
              className="w-[20rem] px-2 py-1 border border-gray border-[2px] rounded-lg"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-3  justify-start">
            <p>Tenure of your loan(Years)</p>
            <input
              placeholder="eg. 4" name="duration"
              className="w-[20rem] px-2 py-1 border border-gray border-[2px] rounded-lg"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-3  justify-start">
            <p>Do you have any existing loan?</p>
            <input
              placeholder="Yes/No"
              className="w-[20rem] px-2 py-1 border border-gray border-[2px] rounded-lg"
            />
          </div>
        </div>

        <div className="flex items-start pt-[1rem] gap-2">
          <input type="checkbox" className="justify-start " />
          <p className="text-[#8094ae] text-xs">
            {" "}
            I do hereby admit that all the above information that I have input
            is true & correct. If any of the above information figured out false
            or incorrect, I understand & agree that my loan application will be
            rejected. I agree to share my information follow the company policy
            as required.
          </p>
        </div>
        <p className="px-4 py-2 w-fit bg-darkteal2 text-white rounded-xl cursor-pointer" onClick={handleSubmit}>
          Submit
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default ApplyloanSection;
