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
		element(by.buttonText("Submit")).click().then(function() {
			element(by.css("div[class*='success']")).getText().then(function(text) {
				console.log(text);
			})
        })
        //The following should be a second test with assertions on validation messaging
        element(by.name("name")).clear();
		element(by.name("name")).sendKeys("M").then(function() {
			element(by.css("[class='alert alert-danger']")).getText().then(function(text) {
				console.log(text);
			})
		})
	})
})