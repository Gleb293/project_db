const express =require("express");
const sql=require('mssql');
const { listen } = require("node:quic");

const app=express();
app.use(express.json());

const dbConfig={
    server:"A102PCPREPODA102PCPREPOD",
    database:"sttest_gleb",
    driver:"msnodesqlv8",
    options:{
        trustedConnection:true,
        trustedServerCertificate:true,
    },
};

app.get("/students",async(req,res)=>{
    const connection =await sql.connect(dbConfig);
    const result=await connection.request()
    .query("SELECT*FROM dbo.students");
    res.json(result.recordset);
});

app.listen(3000,()=>{
    console.log('Server started!on port 3000!,http://localhost:3000');
});

app.post("/students",async(req,res)=>{
    const {name,lastname,birthday,group_id}=req.body;
    const connection=await sql.connect(dbConfig);
    await connection.request().input("name",sql.VarChar,name),input("lastname",sql.VarChar,lastname),input("birthday",sql.Date,birthday).input("group_id",sql.Int,group_id)
    .query(insert into dbo.students(name,lastname,birthday,group_id)
    values (@name,@lastname,@birthday,@group_id)
    );
})