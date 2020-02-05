import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
	background: #7048e8;
	&:hover {
		background: #9775fa;
	}
	&:active {
		background: #5f3dc4;
	}

	z-index: 5;
	cursor: pointer;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	left: 50%;
	bottom: 0px;
	transform: translate(-50%, 50%);

	font-size: 60px;
	color: white;
	border: none;
	outline: none;

	transition: 0.125s all ease-in;

	${(props) =>
		props.open &&
		css`
			background: #d9480f;
			&:hover {
				background-color: #ff922b;
			}
			&:active {
				background-color: #f76707;
			}
			transform: translate(-50%, 50%) rotate(45deg);
		`}
`;

const InsertFormPositioner = styled.div`
	width: 100%;
	bottom: 0;
	left: 0;
	position: absolute;
`;

const InsertForm = styled.div`
	background-color: #f8f9fa;
	padding: 32px;
	padding-bottom: 72px;
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;
	border-top: 1px solid #f1f3f5;
`;

const Input = styled.input`
	padding: 12px;
	border-radius: 4px;
	border: 1px solid #dee2e6;
	width: 100%;
	outline: none;
	font-size: 18px;
	box-sizing: border-box;
`;

function TodoCreate() {
	const [open, setOpen] = useState(false);

	const onToggle = () => setOpen(!open); // onToggle : 기존의 값 반전시키기
	return (
		<>
			{open && (
				<InsertFormPositioner>
					<InsertForm>
						<Input
							placeholder="할 일을 입력 후, Enter 를 누르세요"
							autoFocus
						/>
					</InsertForm>
				</InsertFormPositioner>
			)}
			<CircleButton onClick={onToggle} open={open}>
				<MdAdd />
			</CircleButton>
		</>
	);
}

export default TodoCreate;
