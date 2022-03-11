import React, { Component } from 'react';
import {connect} from 'react-redux';

 class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className='mt-5'>
          <button className='gheDuocChon'></button><span style={{fontSize:'30px'}} className='text-light'>Ghế đã đặt</span>
          <br></br>
          <button className='gheDangChon'></button><span style={{fontSize:'30px'}} className='text-light'>Ghế đang đặt</span>
          <br></br>
          <button style={{marginLeft:0}} className='ghe'></button><span style={{fontSize:'30px'}} className='text-light'>Ghế chưa đặt</span>
        </div>
        <div className='mt-5'>
          <table className='table' border = '2' >
            <thead style={{width:'100%'}}>
              <tr className='text-light'>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody>
                {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
                  return <tr className='text-warning' key={index}>
                            <td>{gheDangDat.soGhe}</td>
                            <td>{gheDangDat.gia}</td>
                            <td><button onClick={()=>{
                              this.props.dispatch({
                                type: 'HUY_GHE',
                                soGhe: gheDangDat.soGhe
                              })
                            }} className='text-light' style={{backgroundColor:'red'}}>Hủy</button></td>
                        </tr>
                })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
const mapStateToDrops = state =>{
  return{
    danhSachGheDangDat: state.BaiTapDatVeReducer.DanhSachGheDangDat
  }
}
export default connect(mapStateToDrops) (ThongTinDatGhe);