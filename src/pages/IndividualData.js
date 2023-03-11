import React from 'react'

const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.Id}</th>
            <th>{individualExcelData.Name}</th>
            <th>{individualExcelData.Roll_No}</th>
            <th>{individualExcelData.Address}</th>
            <th>{individualExcelData.Institute}</th>
            <th>{individualExcelData.Course}</th>
            <th>{individualExcelData.Email}</th>
        </>
    )
}

export default IndividualData;