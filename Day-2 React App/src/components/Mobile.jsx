export function Mobile(props){
    return <>
      <h1>{props.head}</h1>
      {props.Os.map(e=><li>{e}</li>)}
    </>
}