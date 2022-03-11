import React, { Component } from 'react';
import './BaiTapBookingTicket.css';
import Hangghe from './Hangghe';
import ThongTinDatGhe from './ThongTinDatGhe';
import hangghedata from '../../data/danhSachGhe.json'
export default class BaiTapBookingTicket extends Component {
  renderhangghe = ()=>{
    return hangghedata.map((hangghe,index)=>{
      return <div style={{marginLeft:90}} className='text-light text-left mt-3' key={index}>
              <Hangghe hangghe = {hangghe} sohangghe = {index}/>
          </div>
    })  
  }
  render() {
    return (
      <div style={{width:'100%',height:'100%',backgroundImage:"url('./img/bgmovie.jpg')",backgroundSize:'100%',backgroundRepeat:'no-repeat'}}> 
        <div style={{width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.8)'}}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8 text-center'>
                        <div className='display-4 text-light'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                        <div className='text-light mt-3' style={{fontSize:'25px'}}>Màn hình</div>
                        <div className='mt-2' style={{display:'flex', flexDirection:'row',justifyContent:'center'}}>
                            <div className='screen'></div>
                    
                        </div>
                        {this.renderhangghe()}
                    </div>
                    <div className='col-4'>
                        <div className='display-4 text-light'>DANH SÁCH GHẾ BẠN CHỌN</div>
                        <ThongTinDatGhe/>
                    </div>
                </div>
            </div>
        </div>
      </div>    
    )
  }
}
