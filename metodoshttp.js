app.get('/', (req,res)=>{res.json({msg: 'Hello GET'})})
app.post('/', (req,res)=>{res.json({msg: 'Hello POST'})})
app.put('/', (req,res)=>{res.json({msg: 'Hello PUT'})})
app.patch('/', (req,res)=>{res.json({msg: 'Hello PATCH'})})
app.delete('/', (req,res)=>{res.json({msg: 'Hello DELETE'})})

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})