import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function priceRow(qty, price) {
    return qty * price;
}

let grandTotal = 0;

function createRow(title, price, qty) {
    const totalPrice = priceRow(qty, price);
    grandTotal += totalPrice;
    return { title, price, qty, totalPrice };
}

const rows = [
    createRow('Paperclips (Box)', 100, 1),
    createRow('Paper (Case)', 10, 4),
    createRow('Waste Basket', 2, 17),
];

export default function SpanningTable() {
    return (
        <TableContainer component={Paper} sx={{ width: '60%', border: '2px solid black', margin: '4px' }}>
            <Table sx={{ minWidth: 700, maxWidth: '100%' }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={4} className='fw-bold'>
                            Order Date: 24/10/2024
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.title}>
                            <TableCell>{row.title}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">{row.totalPrice}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell align="right" className='fw-bold'>Subtotal</TableCell>
                        <TableCell align="right" className='fw-bold'>{grandTotal}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
