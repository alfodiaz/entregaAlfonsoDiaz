import "./rich-button.css";

export default function RichButton(props){

    return (
        <>
        {
           props.type == "default" && (<button type="button" className="richButton richDefault">Default</button> )
        }
        {
           props.type == "primary" && (<button type="button" className="richButton richPrimary">Primary</button> )

       }
       {
           props.type == "secondary" && (<button type="button" className="richButton richSecondary">Secondary</button> )

       }
       {
           props.type == "disable" && (<button type="button" className="richButton richDisable">Disable</button> )

       }
       {
           props.type == "link" && (<button type="button" className="richButton richLink">Link</button> )

       } 
              
         </>       

    );

};