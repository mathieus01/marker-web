import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0
}


html, body, #root{
  height: 100vh;
  width: 100%;
  font-size: 62.5%;
}
input{
  appearance: none;
}

body{
  background-color: #F5F5F8;
}

@media (min-width: 1024px) and (max-width: 1439px){
  html, body, #root{
  font-size: 55%;
  }
}
@media (min-width: 768px) and (max-width: 1023px){
  html, body, #root{
  font-size: 47,5%;
  }
}
@media (min-width: 425px) and (max-width: 768px){
  html, body, #root{
  font-size: 43%;
  }
}
@media (min-width: 375px) and (max-width: 424px){
  html, body, #root{
  font-size: 40%;
  }
}
@media (min-width: 320px) and (max-width: 374px){
  html, body, #root{
  font-size: 38%;
  }
}

.toast-container{
  font-size: 16px;
}


body{
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: 'Montserrat', sans-serif;
}

  button{
    cursor: pointer;
  }
  
  a{
    text-decoration: none;
  }

  .column{
    display:flex;
    flex-direction: column;
  }
  .row{
    display:flex;
  }
  .btn{
    display:flex;
    width:fit-content;
    color: #fff;
    background: #42a5f5;
    padding: 1.2rem;
    border-radius: 5px;
    font-size: 1.6rem;
    border:0px;
    margin: 5px;
    letter-spacing: 0.122rem;

    &:hover{
      background: #4299ff;
    }
  }

  .btn-danger{
    background: #cb3441;
  }

  .btn-light{
    background: #fff !important;
    border: 1px solid #e9e9e9 !important;
    color: #333 !important;

    &:hover{
      background: #eee;
    }
  }

  .btn-success{
    background: #2ec22e !important;
    color: #fff !important;

    &:hover{
      background: #2ea22e;
    }
  }

  .rounded{
    border-radius: 50%;
  }

  .pr-4{
    padding-right: 4.0rem !important;
  }

  .pl-2{
    padding-left: 2.0rem !important
  }

  .align-items-center{
    display:flex;
    align-items: center !important;
  }
  .align-items-right{
    display:flex;
    align-items: flex-end !important;
  }

  .justify-center{
    display:flex;
    justify-content: center !important;
  }

  p {
    padding: 1rem 0px;
    color: #3fa1e2;
    font-weight: 500;
    letter-spacing: .122rem;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0px;

    .select-input{
      border: none;
      padding: 1rem .5rem;
      border-bottom: 2px solid #e9e9e9;
      width: 100%;
      font-weight: 500;
      color: #595f6e;
      font-size: 1.6rem;
      background: transparent;
    }

    .radio {
      display: flex;
      align-items: center;
      label {
        top: 0px;
        margin-left: 0.5rem;
      }
    }
    .radio-label{
      top: -40px !important;
    }
    label {
      width: 100%;
      height: 100%;
      pointer-events: none;
      color: #595f6e;
      position: relative;
      top: -4rem;
    }

    input:focus
    {
      border: 1px solid #99cef7;
    }

    input:focus + label,
    input:valid + label{
      position: relative;
      transition: 0.3s;
      color: #0d8df1;
      top: -55px;
      font-size: 1.1rem;
    }
  }
  .group-button {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }


  @keyframes fade {
    from{
      opacity: 0;
    }

    to{
      opacity: 1;
    }
  }

  .fade{
    animation: fade 0.8s;
    animation-fill-mode: backwards;
  }

  body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: transparent;
}

body::-webkit-scrollbar-thumb {
  background: #078bf5;
}

.modal {
    position: absolute;
    width:fit-content;
    min-width:fit-content;
    background-color: #fff;
    border-radius:12px;
    z-index:100;
}

  .overlay {
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(72, 72, 72, 0.75);
    z-index:100;
  }

  .swal2-popup{
    display: none;
    position: relative;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    max-width: 100%;
    padding: 12.5px;
    border: none;
    border-radius: 8px;
    background: #fff;
    font-family: inherit;
    font-size: 14px;
  }
.MuiMenuItem-root{
    font-size:12px !important;
    font-family: 'Montserrat', sans-serif !important;
}
.MuiSvgIcon-root{
  width: 15px !important;
  height: 15px !important;
}

.MuiIconButton-root{
  display: none !important;
}
`;

export default GlobalStyle;
