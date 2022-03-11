const stateDefault = {
    DanhSachGheDangDat:[
       
    ]
}

const BaiTapDatVeReducer = (state = stateDefault, action) =>{
    switch (action.type){

        case 'DAT_GHE':{
            let danhSachGheDangDatUpdate = [...state.DanhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe
                ===action.ghe.soGhe);
            if(index !==-1){
                danhSachGheDangDatUpdate.splice(index,1);
            }else{
                danhSachGheDangDatUpdate.push(action.ghe);
            }
            state.DanhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state};
        }
        case 'HUY_GHE':{
            let danhSachGheDangDatUpdate = [...state.DanhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe
                ===action.soGhe);
            if(index !==-1){
                danhSachGheDangDatUpdate.splice(index,1);
            }
            state.DanhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state};
        }
        default: return {...state}
    }
}

export default BaiTapDatVeReducer;