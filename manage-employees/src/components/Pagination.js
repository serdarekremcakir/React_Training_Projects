import React from 'react'
import { useState , useEffect} from 'react';



const Pagination = ({pages,setCurrentPage,sortedEmployees,currentEmployees}) => {
    const numofPages = [];

    for (let index = 1; index <= pages; index++) {
        numofPages.push(index);
    }
    const [currentButton, setCurrentButton] = useState(1)

    useEffect(() => {
      setCurrentPage(currentButton)
      
    }, [setCurrentPage,currentButton])

    return (
        <div className="clearfix">
            <div className="hint-text">Showing <b>{currentEmployees.length}</b> out of <b>{sortedEmployees.length}</b> entries</div>
            <ul className="pagination">
                <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`} >
                    <a href="#!" className="page-link" onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>Previous</a></li>

                {
                    numofPages.map((page, i) => {
                        return (
                            <li key={i} className={`${currentButton === page ? 'page-item active' : 'page-item'}`}>
                                <a href="#!" className="page-link" onClick={() => setCurrentButton(page)}>{page}</a></li>
                        )

                    })
                }

                <li className={`${currentButton === numofPages.length ? 'page-item disabled' : 'page-item'}`} >
                    <a href="#!" className="page-link" onClick={() => setCurrentButton((next) => next === numofPages.length ? next : next + 1)}>Next</a></li>
            </ul>
        </div>
    )
}
export default Pagination;
