export class User {
	constructor(
		public id: number = null,
		public firstName: string = '',
		public lastName: string = '',
		public email: string = '',
		public password: string = '',
		public pwConfirm: string = '',
		public streetAddress: string = '',
		public aptNum: string = '',
		public city: string = '',
		public state: string = '',
		public lucky: string= '',
		public createdAt: Date = new Date(),
		public updatedAt: Date = new Date()
	){}
}
