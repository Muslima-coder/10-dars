// 100 => Create, Delete, Update

import React, { useState } from "react";

function App() {
  const originalStudents = [
    { id: 1, nickname: "Motti", selary: 10000000, firstName: "Muhriddin", lastName: "Jamolov" },
    { id: 2, nickname: "Nimadir", selary: 20000000, firstName: "Sug'diyona", lastName: "Tursunaliyeva" },
    { id: 3, nickname: "Solish", selary: 1500000, firstName: "Soliha", lastName: "Abduqodirova" },
    { id: 4, nickname: "Kichkintoy", selary: 0, firstName: "Laylo", lastName: "Ismatullayeva" },
    { id: 5, nickname: "gurux onasi", selary: 0, firstName: "Nigora", lastName: "Xasanova" },
    { id: 6, nickname: "gurux bolasi", selary: 0, firstName: "Dilnoza", lastName: "Rahmatullayeva" },
    { id: 7, nickname: "axmoqcha", selary: 1000000000000, firstName: "Pahmoq", lastName: "Yoqubova" },
  ];

  const [students, setStudents] = useState(originalStudents);
  const [searchValue, setsearchValue] = useState("");
//Search fn
const handleSearch = (e) => {
  const value = e.target.value.toLowerCase();
  setsearchValue(value);

  const filtered = originalStudents.filter((item) =>
    item.firstName.toLowerCase().includes(value) ||
    item.lastName.toLowerCase().includes(value)  ||
    item.selary.toString().includes(value)  ||
    item.nickname.toLowerCase().includes(value)  
  );

  setStudents(filtered);
};


// Sort and sort stop fn
function handleSortBtn() {
  const sorted = [...students].sort((a, b) => a.selary - b.selary)
  setStudents(sorted)
}
//
function handleSortBtn2() {
  const sorted = [...students].sort((a, b) => a.firstName.localeCompare(b.firstName));
  setStudents(sorted);
}


function handleSortStopBtn() {
   const defaultStudents = [...students].sort((a, b) => a.id - b.id )
   setStudents(defaultStudents)
}

// function handleAddStudentsBtn() {

// }


    return(
        <>
        <div className="containers !py-[50px] ">

            <div className="py-[30px] mx-auto flex-col flex sm:flex-row justify-center items-center gap-[30px]">
                {/* Search input */}
                <label className="flex items-center gap-5 w-[300px] bg-white p-3 rounded-md">
                    <input className="searchInput  text-[15px] font-medium outline-none border-none  w-[300px]  " type="text" name="search" placeholder="Search " aria-label="Search by firstname"   value={searchValue}  onChange={handleSearch} />
                    <svg width="34" height="34" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.661 17.4143L24.1802 23.9335" stroke="black" strokeLinecap="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5136 19.2667C16.3796 19.2667 19.5136 16.1327 19.5136 12.2667C19.5136 8.40073 16.3796 5.26672 12.5136 5.26672C8.64762 5.26672 5.51361 8.40073 5.51361 12.2667C5.51361 16.1327 8.64762 19.2667 12.5136 19.2667Z" stroke="black"/>
                    </svg>
                </label>
                {/* Sort and Sort stop button */}
                <div className="flex items-center gap-[5px]">
                 <button onClick={handleSortBtn} className=" w-[150px] py-3 cursor-pointer text-[15px] font-medium bg-pink-400 rounded-md text-white ">Sort by salary</button>
                <button onClick={handleSortBtn2} className=" w-[150px] py-3 cursor-pointer text-[15px] font-medium bg-orange-300 rounded-md text-white ">Sort by firstname</button>
                <button onClick={handleSortStopBtn} className=" w-[30px]  cursor-pointer text-[18px] font-medium bg-red-700 rounded-md text-white ">x</button>
                </div>
                {/* <button onClick={handleAddStudentsBtn} className=" w-[30px]  cursor-pointer text-[18px] font-medium bg-green-600 rounded-md text-white ">+</button> */}
            </div>

            <div className="flex flex-wrap gap-[30px] justify-center items-center ">
                {students.map((item) =>  <div key={item.id} className="w-[300px] rounded-xl !p-5 shadow-xl shadow-pink-600 ">
                    <div className="flex flex-col gap-3">
                    <strong className="text-[20px] text-white font-medium hover:text-purple duration-300 ">Firstname: {item.firstName}</strong>
                    <strong className="text-[20px] text-white font-medium hover:text-purple duration-300 ">Lastname: {item.lastName}</strong>
                    <p className="text-[20px] text-white font-medium hover:text-purple duration-300 ">Nickname: {item.nickname}</p>
                    <strong className="text-[20px] text-white font-medium hover:text-purple duration-300 ">Salary: {item.selary}</strong>

                    </div>
                </div>)}
            </div>
        </div>
        </>
    )
}

export default App