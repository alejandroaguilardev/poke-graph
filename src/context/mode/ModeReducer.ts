interface IMode {
	mode: string;
}
export type TAction = { type: "changeMode"; payload: IMode };

export const ModeReducer = (state: IMode, action: TAction) => {
	switch (action.type) {
		case "changeMode":
			return {
				...state,
				mode: action.payload.mode,
			};
		default:
			return state;
	}
};
