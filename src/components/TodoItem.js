import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const CheckCircle = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 1px solid #adb5bd;
	font-size: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	cursor: pointer;

	${(props) =>
		props.done &&
		css`
			border: 1px solid #9775fa;
			color: #9775fa;
		`}
`;

const Text = styled.div`
	flex: 1;
	font-size: 21px;
	color: #495057;
	cursor: pointer;

	${(props) =>
		props.done &&
		css`
			color: #ced4da;
		`}
`;

const Remove = styled.div`
	opacity: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #868e96;
	font-size: 24px;
	cursor: pointer;
	&:hover {
		color: #e03131;
	}
`;

const TodoItemBlock = styled.div`
	display: flex;
	align-items: center;
	padding-top: 12px;
	padding-bottom: 12px;

	&:hover {
		${Remove} {
			opacity: 1;
		}
	}
`;

function TodoItem({ id, done, text }) {
	return (
		<TodoItemBlock>
			<CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
			<Text done={done}>{text}</Text>
			<Remove>
				<MdDelete />
			</Remove>
		</TodoItemBlock>
	);
}

export default TodoItem;
