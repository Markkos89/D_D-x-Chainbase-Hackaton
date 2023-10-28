import React from 'react'

const TransactionTable = () => {
  return (
    <div className="flex flex-col  mx-4 my-4">
    <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[576px] mx-auto p-4 bg-black bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
    <h2 className="text-gray-500 text-lg font-semibold pb-4">Transacciones</h2>
    <div className="my-1"></div>
    <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
    <table className="w-full table-auto text-sm">
        <thead>
            <tr className="text-sm leading-normal">
                <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Fecha</th>
                <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Monto</th>
            </tr>
        </thead>
        <tbody>
            <tr className="hover:bg-grey-lighter">
                <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                <td className="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                <td className="py-2 px-4 border-b border-grey-light text-right">$1500</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
                <td className="py-2 px-4 border-b border-grey-light">Ana Torres</td>
                <td className="py-2 px-4 border-b border-grey-light">28/07/2023</td>
                <td className="py-2 px-4 border-b border-grey-light text-right">$2000</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
                <td className="py-2 px-4 border-b border-grey-light">Juan Ramírez</td>
                <td className="py-2 px-4 border-b border-grey-light">29/07/2023</td>
                <td className="py-2 px-4 border-b border-grey-light text-right">$1800</td>
            </tr>

            <tr className="hover:bg-grey-lighter">
                <td className="py-2 px-4 border-b border-grey-light">Luis González</td>
                <td className="py-2 px-4 border-b border-grey-light">31/07/2023</td>
                <td className="py-2 px-4 border-b border-grey-light text-right">$1700</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
                <td className="py-2 px-4 border-b border-grey-light">Laura Pérez</td>
                <td className="py-2 px-4 border-b border-grey-light">01/08/2023</td>
                <td className="py-2 px-4 border-b border-grey-light text-right">$2400</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
                <td className="py-2 px-4 border-b border-grey-light">Pedro Hernández</td>
                <td className="py-2 px-4 border-b border-grey-light">02/08/2023</td>
                <td className="py-2 px-4 border-b border-grey-light text-right">$1950</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
                <td className="py-2 px-4 border-b border-grey-light">Sara Ramírez</td>
                <td className="py-2 px-4 border-b border-grey-light">03/08/2023</td>
                <td className="py-2 px-4 border-b border-grey-light text-right">$1850</td>
            </tr>


        </tbody>
    </table>
    </div>
    </div>
  )
}

export default TransactionTable