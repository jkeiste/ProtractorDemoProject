describe('Protractor Practice Exercises', function() {
	it('Opens Angular JS Website For Practice Exercises', function() {
		browser.driver.manage().window().maximize();
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		element(by.name("name")).sendKeys("MyStudents");
		element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("password2");
		element(by.css("input[type='checkbox']")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
		element(by.buttonText("Submit")).click();
	})
})