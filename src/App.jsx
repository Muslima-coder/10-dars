// 100 => Create, Delete, Update
let elModalWarapper = document.querySelector(".modal-wrapper")
let elModalInner = document.querySelector(".modal-inner")

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

function handleDelete(id) {
  const findIndex =  [...students].findIndex(item => item.id === id)

    students.splice(findIndex, 1);
    setStudents(students);
}




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
                <div className="flex-col flex sm:flex-row justify-centern gap-[15px] items-center sm:gap-[5px]">
                 <button onClick={handleSortBtn} className=" w-[150px] py-3 cursor-pointer text-[15px] font-medium bg-pink-400 rounded-md text-white ">Sort by salary</button>
                <button onClick={handleSortBtn2} className=" w-[150px] py-3 cursor-pointer text-[15px] font-medium bg-orange-300 rounded-md text-white ">Sort by firstname</button>
                <button onClick={handleSortStopBtn} className=" w-[30px]  cursor-pointer text-[18px] font-medium bg-red-700 rounded-md text-white ">x</button>
                </div>
            </div>

            <div className="flex flex-wrap gap-[30px] justify-center items-center ">
                {students.map((item) =>  <div key={item.id} className="w-[300px] rounded-xl !p-5 shadow-xl shadow-pink-600 ">
                    <div className="flex flex-col gap-3">
                    <strong className="text-[20px] text-white font-medium hover:text-purple duration-300 ">Firstname: {item.firstName}</strong>
                    <strong className="text-[20px] text-white font-medium hover:text-purple duration-300 ">Lastname: {item.lastName}</strong>
                    <p className="text-[20px] text-white font-medium hover:text-purple duration-300 ">Nickname: {item.nickname}</p>
                    <strong className="text-[20px] text-white font-medium hover:text-purple duration-300 ">Salary: {item.selary}</strong>
                    <div className="flex justify-between items-center pt-[5px]">
                      <button onClick={() => handleDelete(item.id)} className="cursor-pointer border-none bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                      </svg>
                      </button>
                      <button className="cursor-pointer border-none bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                      </svg>
                      </button>
                    </div>
                    </div>
                </div>)}
            </div>
        </div>
        </>
    )
}

export default App