// table 태그객체를 boardlist 변수에 저장
const boardlist = document.getElementById("board-list");

// 게시글 데이터를 받아오기 위한 함수 구현
const getList = async () => {

    // axios 문법
    // let res = await axios.get("http://localhost:8081/api/board/list"); // 테스트용
    let res = await axios.get("/api/board/list");
    console.log(res.data);

    let boards = res.data;  // 서버에서 받아온 데이터
    let resultHTML = `
            <tr>
                <th>번호</th>
                <th>글제목</th>
                <th>작성자</th>
                <th>작성일자</th>
                <th>조회수</th>
            </tr>
        `;  // 웹 브라우저에 출력하기 위한 HTML 구조를 임시로 저장

    for(let i = 0; i<boards.length; i++){
        resultHTML += `
            <tr>
                <td>${boards[i].b_idx}</td>
                <td><a href="boardDetail.html?idx=${boards[i].b_idx}">${boards[i].b_title}</td>
                <td>${boards[i].b_writer}</td>
                <td>${boards[i].b_datetime}</td>
                <td>${boards[i].b_count}</td>
            </tr>
            `;
    }

    // table 태그에 게시글 데이터(HTML포함)를 출력하겠다.
    boardlist.innerHTML = resultHTML;
}

// 게시글 데이터 요청함수 호출
getList();



