import React from 'react'
import ButtonAdminOrder from '../BottonAdmin/ButtonAdminOrder'

function OrdersComp({ order }) {
    return (
        <table>
            <thead className="bg-gray-50">
                <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Tipo de orden
                    </th>

                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >

                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Estado
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        status
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            {order.map(orders => {
                return <tr key={orders.id} className="">
                    <td className="px-6 py-4 whitespace-nowrap py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 " >
                        <div className="flex items-center">
                            <div className="ml-4">
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                </th>
                                <div className="text-sm font-medium text-gray-900">{`${orders.title} `}</div>
                                <div className="text-sm text-gray-500">{orders.user?.fullName}</div>
                            </div>
                        </div>
                    </td>


                    <td className="px-6 py-4 whitespace-nowrap">


                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">

                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {
                                orders.mp_id
                            }
                        </span>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{orders.isAdmin ? "Admin" : "Normal"}</td> */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <ButtonAdminOrder id={orders.id} />
                    </td>
                </tr>
            })}
        </table>
    )
}

export default OrdersComp
