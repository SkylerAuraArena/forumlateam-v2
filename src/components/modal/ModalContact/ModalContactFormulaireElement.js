import { memo } from 'react';

const ModalContactFormulaireElement = (props) => {
    console.log(`%cModalChat -- elt-${props.name}`, 'background: white; color: green;')

    return (
        (props.typeDiv === "input") ? (
            <div className="form-group">
                <input 
                    type={props.type} 
                    ref={props.refElt}
                    className={props.className}
                    id={props.idElt}
                    name={props.name}
                    aria-describedby={props.describe}
                    placeholder={props.placeholder}
                    onChange={(event)=>props.function(props.name, event.target.value)}
                    autoComplete="off"
                />
                <div ref={props.errorRef} onClick={() => props.errorFunction(props.name)} className={props.errorHidden}>{props.errorPlaceholder}</div>
            </div>
        ) : (
            <div className="form-group">
                <textarea 
                    ref={props.refElt}
                    className={props.className}
                    id={props.idElt}
                    name={props.name}
                    cols="40" rows="10"
                    aria-invalid="false"
                    aria-describedby="messageHelp" 
                    placeholder={props.placeholder}
                    onChange={(event)=>props.function(props.name, event.target.value)}
                    autoComplete="off"
                />
            </div>
        )
    )
}

export default memo(ModalContactFormulaireElement)