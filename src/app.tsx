import { AttendeeList } from "./components/attendee-list"; //1216
import { Header } from "./components/header";

export function App() {
  return (
    <div>
          <div className="max-w-[1116px] mx-auto py-5 flex flex-col gap-5"> 
            <Header/>
            <AttendeeList/>
          </div>
    </div>
  )
}



// interface MeuBotaoProps {
//   text: string
// }

// function MeuBotao(props: MeuBotaoProps){
//    return<button className="bg-slate-400 h-10 px-3 rounded font-medium">{props.text}</button>
// }    bg = cor , h = altura px= padding rounded= border radius 8px                

// export function App() {
//   return (
//     <div>
//           <h1>hellow word</h1>
//           <div className="flex gap-2">
//             <MeuBotao text="clique aqui"/>
//             <MeuBotao text="botão 1"/>
//             <MeuBotao text="botão 2"/>
//             <MeuBotao text="botão 3"/>
//           </div>
//     </div>
//   )
// }
