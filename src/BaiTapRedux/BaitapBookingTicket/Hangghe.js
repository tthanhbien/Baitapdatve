import React, { Component } from 'react';
import {connect} from 'react-redux';
class Hangghe extends Component {
  renderghe = () =>{
    let {hangghe} = this.props;
    return hangghe.danhSachGhe.map((ghe,index)=>{
      let cssGhe = '';
      let disabled = false;
      if(ghe.daDat){
        cssGhe = 'gheDuocChon'
        disabled = true;
      }
      let cssGhedangdat = '';
      let indexGheDangDat =  this.props.DanhSachGheDangDat.findIndex(gheDangDat =>
                       gheDangDat.soGhe === ghe.soGhe);
      if(indexGheDangDat !== -1){
        cssGhedangdat = 'gheDangChon';
      }
      return <button onClick={()=>{this.props.datGhe(ghe)}} disabled = {disabled} key={index} className={`ml-1 ghe ${cssGhe} ${cssGhedangdat}`}>{ghe.soGhe}
          </button>
    })
  }
  rendersohang = () =>{
    return this.props.hangghe.danhSachGhe.map((ghe,index)=>{
      return <button className='rowNumber' key={index}>{ghe.soGhe}</button>
    })
  }
  renderhangghe = () =>{
    let {hangghe} = this.props;
    if(this.props.sohangghe === 0){
      return <div>
                {hangghe.hang} {this.rendersohang()}
            </div>
    }
    else{
      return <div style={{display:'flex'}}>
        {hangghe.hang} <div style={{width:'100%'}}>{this.renderghe()}</div>
    </div>
    }
    
  }
  render() {
    
    
    return (
        <div>
          {this.renderhangghe()}
        </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    DanhSachGheDangDat: state.BaiTapDatVeReducer.DanhSachGheDangDat
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
      datGhe: (ghe) =>{
        dispatch({
          type: 'DAT_GHE',
          ghe
        })
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hangghe);
