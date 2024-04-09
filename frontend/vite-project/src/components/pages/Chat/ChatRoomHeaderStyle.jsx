import styled from 'styled-components';

const ChatRoomHeaderWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SellerProfile = styled.div`
	width: 100%;
	display: flex;
	padding: 10px 15px;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
	border-bottom: 2px solid #f7f2fa;
	gap: 10px;
`;

const Profile = styled.div`
	width: 56px;
	height: 56px;
`;

const ProfileImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: cover;
`;

const Wrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const NickName = styled.p`
	display: flex;
	align-items: center;
	font-size: 22px;
	font-style: normal;
	font-weight: 700;
	line-height: 28px;
	margin: 0;
`;

const MenuButton = styled.button`
	cursor: pointer;
	position: relative;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
`;

const Menu = styled.div`
	position: absolute;
	top: 30px;
	left: 0;
	background: #fff;
	border: 2px solid #f7f2fa;
	border-radius: 20px;
	padding: 5px;
	display: ${({ open }) => (open ? 'block' : 'none')};
`;

const MenuItem = styled.div`
	display: flex;
	justify-content: center;
	white-space: nowrap;
	padding: 8px 12px;
	cursor: pointer;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 16px;
	&:hover {
		background-color: #f0f0f0;
		border-radius: 20px;
	}
`;

const BookInfo = styled.div`
	width: 100%;
	padding: 10px 15px;
	display: flex;
	padding: 10px;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
	gap: 10px;
`;

const BookCover = styled.div`
	display: flex;
	width: 80px;
	height: 80px;
	align-items: center;
`;

const BookImg = styled.img`
	width: 80px;
	height: 80px;
`;

const TextWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const Title = styled.p`
	display: flex;
	align-items: center;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 28px;
	margin: 0;
`;

const PriceContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`;

const Price = styled.p`
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 28px;
	margin: 0;
`;

const PriceWon = styled.p`
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 28px;
	margin: 0;
`;

export {
	ChatRoomHeaderWrap,
	SellerProfile,
	Profile,
	ProfileImg,
	Wrap,
	NickName,
	MenuButton,
	Img,
	Menu,
	MenuItem,
	BookInfo,
	BookCover,
	BookImg,
	TextWrap,
	Title,
	PriceContainer,
	Price,
	PriceWon,
};