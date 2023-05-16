import { http } from "../helpers/request";


const BASE_URL = 'http://localhost:8080'

export const GetProducts = fetch(`${BASE_URL}/products`)
    .then(response => {
        return response.json();
    }).then(
        responseJson => {
            return { response: responseJson };
        }
    )

export const SearchProduct = async (searchFilter) => {
    var response = await fetch(`${BASE_URL}/products/search`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                keyword: searchFilter.keyword,
                perPage: searchFilter.perPage,
                pageNum: searchFilter.pageNum,
                brand_ids: searchFilter.brand_ids,
                category_ids: searchFilter.category_ids,
                sortType: searchFilter.sortType,
                sortField: searchFilter.sortField
            }
        )
    }).then(response => {
        return response.json();
    }).then(
        responseJson => {
            return { response: responseJson };
        }
    );
    return response;
}
export const GetTotalPageForSearch = async (searchFilter) => {
    var response = await fetch(`${BASE_URL}/products/page-count`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                keyword: searchFilter.keyword,
                perPage: searchFilter.perPage,
                pageNum: searchFilter.pageNum,
                brand_ids: searchFilter.brand_ids,
                category_ids: searchFilter.category_ids,
                sortType: searchFilter.sortType,
                sortField: searchFilter.sortField
            }
        )
    }).then(response => {
        return response.json();
    }).then(
        responseJson => {
            return { response: responseJson };
        }
    );
    return response;
}
export const GetAllCategories = async () => {
    var response = await fetch(`${BASE_URL}/categories`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(
        responsJson => {
            return { response: responsJson };
        }
    )
    return response;
}
export const GetAllBrands = async () => {
    var response = await fetch(`${BASE_URL}/brands`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(
        responsJson => {
            return { response: responsJson };
        }
    )
    return response;
}
export const GetUserDetailByUserName=async()=>{
    if(localStorage.getItem("token")==null){
        return null;
    }
    const {data}=await http.get(`/user/get?username=${localStorage.getItem("username")}`)
    // var response=await fetch(`${BASE_URL}/user/get?username=${localStorage.getItem("username")}`,{
    //     method:'Get',
    //     headers:{
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${localStorage.getItem("token")}`
    //     }
    // }).then(
    //     response=>{
    //         return response.json();
    //     }
    // ).then(
    //     responseJson=>{
    //         return {response:responseJson};
    //     }
    // )
    console.log(data);
    return data;
}
export function LogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('username')
    localStorage.removeItem("isAuthenticated")
}