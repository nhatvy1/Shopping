import { useState, useEffect } from 'react';
import TableAll from '../Table/TableAll';
import Table from '../Table/Table';

import './ManageUsers.scss';
import { FcPlus } from 'react-icons/fc';
import { getAllUsers } from '../../../../services/apiService';


const ManageUsers = (props)=> {
    const LIMIT_USER = 5
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [listUsers, setListUsers] = useState([])

    useEffect(()=> {
        fetchListUsersALl('ALL')
    }, [])

    const fetchListUsersALl = async(id)=> {
        let res = await getAllUsers(id)
        console.log('Check res: ', res.users)
        if (res.errCode === 0) {
            setListUsers(res.users)
        }
    }

    // const fetchListUsers = async (page)=> {
    //     let res = await getUserWithPaginate(page, LIMIT_USER)
    //     console.log('Res.dt: ', res)
        // if (res.EC === 0) {
        //     setListUser(res.DT.users)
        //     setPageCount(res.DT.totalPages)
        //     console.log(res.DT.users)
        // }
    // }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manager user
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary mt-3"><FcPlus />Add new users</button>
                </div>
                <div className="table-users-container">
                    <TableAll
                        listUsers={listUsers}
                    />
                    {/* <Table
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnViewDetail={handleClickBtnViewDetail}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUserWithPaginate={fetchListUserWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    /> */}
                    
                </div>
            </div>
        </div>
    )
}

export default ManageUsers