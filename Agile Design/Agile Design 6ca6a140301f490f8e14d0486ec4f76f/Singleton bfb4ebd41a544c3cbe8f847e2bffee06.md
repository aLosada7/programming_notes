# Singleton

You'll only have one instance of a class available (without taking care of how many times you try to instantiate it)

Very useful handling stuff like database connections

```tsx
class MyDBConn {
	protected static instance: MYDBConn | null = null
	private id: number = 0
	
	constructor() {
		this.id = Math.random()
	}
	
	public static getInstance(): MyDBConn {
		if (!MyDBConn.instance) {
			MyDBConn.instance = new MyDBConn()
		}
		return MyDBConn.instance
	} 
}
```

For this example, if you instantiate the class as many times as you want, you will obtain always the same instance (you can easily check it getting the id)