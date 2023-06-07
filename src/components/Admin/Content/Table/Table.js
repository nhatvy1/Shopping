import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Buffer } from 'buffer';

const Table = (props)=> {
    const { listUsers, pageCount } = props
    // Invoke when user click to request another page.
    // const [pageCount, setPageCount] = useState(0);
    const handlePageClick = (event) => {
        props.fetchListUsers(+event.selected+1)
        props.setCurrentPage(+event.selected+1)
    };

    return (
        <>
            <table className="table table-hover table-bordered mt-5">
                <thead>
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Image</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((user, index)=> {
                            if (user.image !== null) {
                                var buffer = Buffer(user.image);
                                var string = buffer.toString('base64')
                            }
                            return (
                                <tr key={index}>
                                    <th>{user.id}</th>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.image !== null ? 
                                            <img src={`data:image/png;base64,${string}`} 
                                                width={100} height={100}
                                            />
                                            :    
                                            'Ko có hình'
                                        }
                                    </td>
                                    <td>{user.roleId === 3 ? 'KH': null}</td>
                                    <td>
                                        <button className="btn btn-primary"
                                            onClick={()=>props.handleClickBtnViewDetail(user)}
                                        >View</button>
                                        <button className="btn btn-warning mx-3"
                                            onClick={()=>props.handleClickBtnUpdate(user)}
                                        >Update </button>
                                        <button className="btn btn-danger"
                                            onClick={()=> props.handleClickBtnDelete(user)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={4}>Not found data</td>
                        </tr>
                    }
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
                <ReactPaginate
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="Prev"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={props.currentPage - 1}
                />
            </div>
        </>
    )
}

export default Table