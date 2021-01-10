import React from 'react';
import './TableData.css';

const TableData = ({headersList,dataList,keyName}) => {
    return (
        <table className="highlight centered">

            <thead>
                <tr>
                    {
                        headersList.map((header,index) => {
                            return (
                                <th key={index}>{header}</th>   
                            );
                        })
                    }
                </tr>
            </thead>

            <tbody>
                {
                    dataList.map((data) => {
                        return (
                            <tr key={data[keyName]}>
                                
                                {
                                    Object.keys(data).map((objectKey, index) => {
                                        if(objectKey !== keyName && typeof data[objectKey] !== 'object'){
                                            return <td key={index}>{data[objectKey]}</td>;
                                        }
                                    })
                                }
                                <td className="TableData-buttons-container">
                                    <a className="waves-effect waves-light indigo lighten-4 btn-large"><i className="material-icons red-text">delete</i></a>
                                    <a className="waves-effect waves-light indigo lighten-4 btn-large"><i className="material-icons green-text">edit</i></a>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>

        </table>
    );
}

export default TableData;