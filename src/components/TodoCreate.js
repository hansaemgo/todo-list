import React from 'react';
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
`;

function TodoCreate() {
	return (
		<CircleButton>
			<MdAdd />
		</CircleButton>
	);
}

export default TodoCreate;
