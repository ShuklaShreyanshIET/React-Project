import React from "react";
import exportFromJSON from 'export-from-json';
import App from "../App";

const Send= ()=>{
    const onExportLocal =()=>{
        const data = [{
            Id:'1',
            Name:'Aarav',
            Roll_No: 1962001,
            Address: '10/1, Main Street, Gandhi Nagar, Bangalore - 560008, Karnataka',
            Institute: 'LMN Institute of Technology',
            Email:'aarav342@gmail.com'
        },
        {
            Id:'2',
            Name:'Dhruv',
            Roll_No: 1473502,
            Address: 'Door No. 12-2-417/A, Bank Colony Road, Ruknuddin Bagh, Hyderabad - 500032, Telangana',
            Institute: 'DEF Management Institute',
            Email:'dhruv124@gmail.com'
        },
        {
            Id:'3',
            Name:'Sahil',
            Roll_No: 1962001,
            Address: 'H.No. 8-2-123/456, Sri Nagar Colony, Road No. 1, Banjara Hills, Hyderabad - 500034, Telangana',
            Institute: 'MNO Medical College',
            Email:'sahil879@gmail.com'
        },
        {
            Id:'4',
            Name:'Aarav',
            Roll_No: 1962001,
            Address: '10/1, Main Street, Gandhi Nagar, Bangalore - 560008, Karnataka',
            Institute: 'LMN Institute of Technology',
            Email:'aarav342@gmail.com'
        },
        {
            Id:'5',
            Name:'Aarav',
            Roll_No: 1962001,
            Address: '10/1, Main Street, Gandhi Nagar, Bangalore - 560008, Karnataka',
            Institute: 'LMN Institute of Technology',
            Email:'aarav342@gmail.com'
        },
        {
            Id:'6',
            Name:'Aarav',
            Roll_No: 1962001,
            Address: '10/1, Main Street, Gandhi Nagar, Bangalore - 560008, Karnataka',
            Institute: 'LMN Institute of Technology',
            Email:'aarav342@gmail.com'
        },
        {
            Id:'7',
            Name:'Aarav',
            Roll_No: 1473502,
            Address: '10/1, Main Street, Gandhi Nagar, Bangalore - 560008, Karnataka',
            Institute: 'LMN Institute of Technology',
            Email:'aarav342@gmail.com'
        },
        {
            Id:'8',
            Name:'Dhruv',
            Roll_No: 1473502,
            Address: 'Door No. 12-2-417/A, Bank Colony Road, Ruknuddin Bagh, Hyderabad - 500032, Telangana',
            Institute: 'DEF Management Institute',
            Email:'dhruv124@gmail.com'
        },
        {
            Id:'9',
            Name:'Dhruv',
            Roll_No: 1473502,
            Address: 'Door No. 12-2-417/A, Bank Colony Road, Ruknuddin Bagh, Hyderabad - 500032, Telangana',
            Institute: 'DEF Management Institute',
            Email:'dhruv124@gmail.com'
        },
        {
            Id:'10',
            Name:'Dhruv',
            Roll_No: 1473502,
            Address: 'Door No. 12-2-417/A, Bank Colony Road, Ruknuddin Bagh, Hyderabad - 500032, Telangana',
            Institute: 'DEF Management Institute',
            Email:'dhruv124@gmail.com'
        },
        {
            Id:'11',
            Name:'Dhruv',
            Roll_No: 1473502,
            Address: 'Door No. 12-2-417/A, Bank Colony Road, Ruknuddin Bagh, Hyderabad - 500032, Telangana',
            Institute: 'DEF Management Institute',
            Email:'dhruv124@gmail.com'
        },
        {
            Id:'12',
            Name:'Sahil',
            Roll_No: 1762503,
            Address: 'H.No. 8-2-123/456, Sri Nagar Colony, Road No. 1, Banjara Hills, Hyderabad - 500034, Telangana',
            Institute: 'MNO Medical College',
            Email:'sahil879@gmail.com'
        },
        {
            Id:'13',
            Name:'Sahil',
            Roll_No: 1762503,
            Address: 'H.No. 8-2-123/456, Sri Nagar Colony, Road No. 1, Banjara Hills, Hyderabad - 500034, Telangana',
            Institute: 'MNO Medical College',
            Email:'sahil879@gmail.com'
        },
        {
            Id:'14',
            Name:'Sahil',
            Roll_No: 1762503,
            Address: 'H.No. 8-2-123/456, Sri Nagar Colony, Road No. 1, Banjara Hills, Hyderabad - 500034, Telangana',
            Institute: 'MNO Medical College',
            Email:'sahil879@gmail.com'
        },
        {
            Id:'15',
            Name:'Sahil',
            Roll_No: 1762503,
            Address: 'H.No. 8-2-123/456, Sri Nagar Colony, Road No. 1, Banjara Hills, Hyderabad - 500034, Telangana',
            Institute: 'MNO Medical College',
            Email:'sahil879@gmail.com'
        },
        {
            Id:'16',
            Name:'Sahil',
            Roll_No: 1762503,
            Address: 'H.No. 8-2-123/456, Sri Nagar Colony, Road No. 1, Banjara Hills, Hyderabad - 500034, Telangana',
            Institute: 'MNO Medical College',
            Email:'sahil879@gmail.com'
        },
        {
            Id:'17',
            Name:'Sahil',
            Roll_No: 1762503,
            Address: 'H.No. 8-2-123/456, Sri Nagar Colony, Road No. 1, Banjara Hills, Hyderabad - 500034, Telangana',
            Institute: 'MNO Medical College',
            Email:'sahil879@gmail.com'
        },
        {
            Id:'18',
            Name:'Sahil',
            Roll_No: 1762503,
            Address: 'H.No. 8-2-123/456, Sri Nagar Colony, Road No. 1, Banjara Hills, Hyderabad - 500034, Telangana',
            Institute: 'MNO Medical College',
            Email:'sahil879@gmail.com'
        },
        {
            Id:'19',
            Name:'Sahil',
            Roll_No: 1762503,
            Address: 'H.No. 8-2-123/456, Sri Nagar Colony, Road No. 1, Banjara Hills, Hyderabad - 500034, Telangana',
            Institute: 'MNO Medical College',
            Email:'sahil879@gmail.com'
        },
        
    ]

    const fileName = 'localData'
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({data, fileName, exportType});
    };

    return(
        <>
        {/* <App>Importing the Data</App> */}
        <h4><b>Students</b></h4>
        <h5>List of all students in the database</h5>
        
        <button onClick={onExportLocal}>Export as CSV</button>
        </>
    );
}

export default Send;