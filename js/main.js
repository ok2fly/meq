const actionSwitchFile = (src) => {
	const pdfIframe = document.querySelector(".pdf-wrap");
	pdfIframe.src = `/meq/pdfjs-4.4.168/web/viewer.html?file=${encodeURIComponent(
		src
	)}`;
	// pdfIframe.src = `/pdfjs/web/viewer.html?file=${src}`;
};

// const url = "http://localhost:8080/TYPESCRIPT编程.pdf";
const url = "https://ok2fly.github.io/meq/001.pdf";

// actionSwitchFile("https://arxiv.org/pdf/2001.09977.pdf");
actionSwitchFile(url);

//   作者：HOHO  链接：https://juejin.cn/post/7356889912127422464

function downloadFile(url, filename) {
	var link = document.createElement("a");
	link.download = filename;
	link.href = url;

	document.body.appendChild(link);
	link.click();

	document.body.removeChild(link);
}

function download() {
	var url = "https://ok2fly.github.io/meq/001.pdf";
	var filename = "Certificates_Download.pdf";

	var btn = document.getElementById("download");
	btn.addEventListener("click", function () {
		downloadFile(url, filename);
	});
}

download();
// 作者：HOHO  链接：https://juejin.cn/post/7356889912127422464

const choiseAni = async () => {
	const choiceWrapper = document.querySelector(".choice-wrapper");
	const nav = document
		.querySelector(".choice-wrapper")
		.querySelectorAll(".option");
	let optionExpandedHeight;
	optionExpandedHeight = Array.from(nav).map(
		(i) => i.offsetHeight
	); /*展开高度*/

	const optionItemsFoldHeight = Array.from(nav).map(
		(i) =>
			i.children[0]?.offsetHeight +
			parseFloat(window.getComputedStyle(i).paddingTop) +
			parseFloat(window.getComputedStyle(i).paddingBottom)
	); /*折叠后高度*/
	const arrows = document
		.querySelector(".choice-wrapper")
		.querySelectorAll(".arrow");
	const expandIndex = 0;
	let isShow = {
		0: false,
		1: false
	}
	const handleClick = (e, i) => {
		const content = e.querySelector(".option-con");
		const arrow = e.querySelector(".arrow");
		if (!isShow[i]) {
			arrow.style.transform = "rotate(90deg)"; /*箭头旋转*/
			e.style.height = `${optionExpandedHeight[i]}px`; /* 设置元素高度 */
			content.style.opacity = `1`;
		} else {
			arrow.style.transform =
				"rotate(0deg)"; /*恢复初始状态，等待点击*/
			e.style.height = `${optionItemsFoldHeight[i]}px`; /* 设置元素高度 */
			content.style.opacity = `0`;
		}
		isShow[i] = !isShow[i]
	};
	// /*遍历设置初始状态*/
	Array.from(nav).forEach((e, i) => {
		const title = e.querySelector(".title");
		const content = e.querySelector(".option-con");
		const arrow = e.querySelector(".arrow");

		/*过渡style添加*/
		content.style.transition = `all 0.5s ease`;
		title.style.transition = `all 0.5s ease`;
		e.style.transition = `all 0.5s ease`;
		e.style.overflow = `hidden`;
		arrow.style.transition = `all 0.5s ease`;

		/*默认不展开的状态*/
		e.style.height = `${optionItemsFoldHeight[i]}px`
		content.style.opacity = `0`
		e.addEventListener('click', () => handleClick(e, i))
	});
};
choiseAni();
