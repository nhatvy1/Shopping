import { useState, useEffect } from 'react';
import Table from '../Table/Table'
import './ManageUsers.scss';
import { FcPlus } from 'react-icons/fc';
import { getAllUsers } from '../../../../services/apiService';


const ManageUsers = (props)=> {
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [listUsers, setListUsers] = useState([])

    useEffect(()=> {
        fetchListUsers(1)
    }, [])

    const fetchListUsers = async(page)=> {
        let res = await getAllUsers(page)
        if (res.errCode === 0) {
            setListUsers(res.users)
            setPageCount(res.totalPage)
        }
    }

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
                    <Table
                        listUsers={listUsers}
                        fetchListUsers={fetchListUsers}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        pageCount={pageCount}
                    />
                </div>
            </div>
        </div>
    )
}

export default ManageUsers