import React from 'react'
import { Table } from 'antd';
const PrimaryClasses = () => {



    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            dataIndex: 'address',
            key: 'address',
            render: (ele) => (
                <>
                    <div className="d-flex g-2">
                        <button className='btn btn-primary'>dfgfg</button>
                        <button className='btn btn-primary'>dfgfg</button>
                    </div>
                </>
            )
        },
    ];

    return (
        <>

            <div className="container my-4">

                <div className="row my-4">
                    <div className="col">
                        <input type="text" className='form-control' placeholder='Search...' />
                    </div>
                    <div className="col text-end">
                        <button className='btn btn-primary'>+ Add</button>
                    </div>
                    <div className="col text-end">
                        <button className='btn btn-primary'>Reset</button>
                    </div>
                </div>

                <Table dataSource={dataSource} columns={columns} />;
            </div>
        </>
    )
}

export default PrimaryClasses