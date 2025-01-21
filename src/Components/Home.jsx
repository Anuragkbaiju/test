import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
const data=[
    {"Name":"Anurag","Course":"BTECH","Place":"Kollam","Address":"Sreeushas"},
    {"Name":"Abhi","Course":"BTECH","Place":"Kollam","Address":"Ananda bhavan"},
    {"Name":"Ashams","Course":"BTECH","Place":"Kollam","Address":"Ananda bhavan"},
]
const Home = () => {
  return (
  <>
  <TableContainer>
   <Table>
    <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Place</TableCell>
            <TableCell>Address</TableCell>
            
        </TableRow>
            <TableHead>
                
                <TableBody>
                {data.map((item) => (
                    <TableRow key={item.NAME} sx={{ '&:last-child td, &:last-child th': {border:}}}>
                        <TableCell component="th" scope="row"
                        {item.NAME}

                        <TableCell>Anurag</TableCell>
                        <TableCell> btech</TableCell>
                        <TableCell>Tvm</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Abhi</TableCell>
                        <TableCell>CS</TableCell>
                        <TableCell>Kollam</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Ashams</TableCell>
                        <TableCell>Mech Eng</TableCell>
                        <TableCell>Kollam</TableCell>
                    </TableRow>
    </TableHead>
    
    </Table>           
  </TableContainer>
  </>
  )
}

export default Home