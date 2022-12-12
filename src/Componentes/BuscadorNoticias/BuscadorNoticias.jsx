import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./BuscarNoticias.css";
import { TextField } from "@mui/material";

const BuscadorNoticias = ({ onBuscarNoticias }) => {
  const [criterioBusqueda, setCriterioBusqueda] = useState("");

  const longit = criterioBusqueda  
    return (
    longit.length > 2?
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        marginTop: 2,
        marginLeft: 44,
        marginBottom: 2,
      }}
    >
      <TextField  id="outlined-basic" label="Buscar Noticias" variant="outlined" color="primary" sx={{width: '40ch'}} 
      autoFocus = {true}
      aria-label="search"
      role ="searchbox"
      onKeyDown = {(e) =>{
        if(e.key === 'Enter'){
          setCriterioBusqueda(e.target.value);
          e.preventDefault()
          onBuscarNoticias(criterioBusqueda)
        }
      }}
      
      onChange={(e) => {
        setCriterioBusqueda(e.target.value);
        
      }}
      />
      
     
      <IconButton
        type="button"
       sx={{ p: "10px" ,background:'lightblue' }}
        aria-label="search"
        onClick={() => {
          onBuscarNoticias(criterioBusqueda);
        }}
        role = "button"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  : <Paper
  component="form"
  sx={{
    p: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginTop: 2,
    marginLeft: 44,
    marginBottom: 2,
  }}
>
<TextField  id="outlined-basic" label="Buscar Noticias" variant="outlined"  sx={{width: '40ch'}} color="primary"
autoFocus = {true}
role ="searchbox"
onKeyDown = {(e) =>{
 
  if(e.key === 'Enter'){
    setCriterioBusqueda(e.target.value);
    e.stopPropagation()    
  }
}}
onChange={(e) => {
  setCriterioBusqueda(e.target.value);
  
}}
/> 
 <IconButton
    type="button"
    sx={{ p: "10px",pointerEvents:'none', cursor:'not:allowed', background:'#B5B2B2' }}
    aria-label="search"
    onClick={() => {
      onBuscarNoticias(criterioBusqueda);
    }}
  >
    <SearchIcon />
  </IconButton>
</Paper> );
};
export default BuscadorNoticias;
