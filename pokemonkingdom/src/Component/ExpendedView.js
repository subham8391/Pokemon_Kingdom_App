import '../App.css';
function ExpendededView(props){

    const{type,visible,setVisible,image,name,height,weight,data}=props;
    return(
        <div className='extended_Window'>
            
            <div className={`expended-overlay ${type}`}>
                <div className='ex-closebtn'>
                    <button className={`closeBtn`} onClick={()=>setVisible(false)}>X</button>
                </div>
                <div className='Expended-Data'>
                    {/* left portion */}
                    <div className='Expended-Left'>
                        <img className='Expended-Img' src={image} alt={name}/>
                        <h2 className='Expended-Name'>{name}</h2>
                        <h2 className='Expended-Type'>{type}</h2>
                    </div>
                    {/* Right portion */}
                    <div className='Expended-Right'>
                        <div className="main-container">
                            <div className="sub-div sub-div-1">
                                
                                <div className="child-div">HEIGHT {height}</div>
                                <div className="child-div">WEIGHT {weight}</div>
                            </div>
                            <h4>STATES</h4>
                            <div className="sub-div sub-div-2">
                                
                                <div className="child-div">{data.nameStat1}</div>
                                <div className="child-div">{data.nameStat2}</div>
                                <div className="child-div">{data.nameStat3}</div>
                                <div className="child-div">{data.nameStat4}</div>
                                <div className="child-div">{data.nameStat5}</div>
                                <div className="child-div">{data.nameStat6}</div>
                            </div>
                            <h4>BASE STATE</h4>
                            <div className="sub-div sub-div-3">
                            
                                <div className="child-div">{data.Stat1Point}</div>
                                <div className="child-div">{data.Stat2Point}</div>
                                <div className="child-div">{data.Stat3Point}</div>
                                <div className="child-div">{data.Stat4Point}</div>
                                <div className="child-div">{data.Stat5Point}</div>
                                <div className="child-div">{data.Stat6Point}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ExpendededView;