type MyType = {
    id: number,
    tenChuyenMuc: string,
    maChuyenMuc: string
}

export interface INewPost {
    id: number,
    tieuDe: string,
    nguoiDang: string,
    ngayDang: string,
    luotXem: number,
    chuyenMuc: MyType[],
    noiDung: string,
    anh: string

}