import { getUserInfoResolver } from './user';

const query = {
	getUserInfo: getUserInfoResolver,
};

export default query;
