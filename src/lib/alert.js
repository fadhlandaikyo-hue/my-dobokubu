import Swal from "sweetalert2";

export const alertSuccess = async (message) => {
    return Swal.fire({
        icon: 'success',
        title: "成功",
        text: message,
    })
}

export const alertError = async () => {
    return Swal.fire({
        icon: 'error',
        title: "一回を確認してください",
        text: "ユーザー名もしくはパスワードが正しくありません",
    })
}
