package api

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

// Defines the API handles for server.
func CreateApiHandler() *gin.Engine {
	// Router from gin library that offers logging and routing capabilities.
	router := gin.Default()
	// Use a middleWareHandler which defines how to deal with headers. 
	// gin.Recovery() is part of gib lib that offers recovery from crash with 505 error code. 
	// router.Use(middleWareHandler(), gin.Recovery())
	router.Use(static.Serve("/", static.LocalFile("../frontend/dist/", true)))
	// router.Use(static.Serve("/tester", static.LocalFile("../frontend/public/", true)))

	// Set route for default landing page.
	router.GET("/tester", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello secure world",
		})
	})

	// Set route for default landing page.
	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello secure world",
		})
	})
	// Set route for login page.
	router.GET("/login", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "secure login",
		})
	})

	return router
}

func middleWareHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		// t := time.Now()
		// Add base headers
		// addCORS(c)
		// Run next function
		c.Next()
		// // Log request
		// log.Infof("%v %v %v %s", c.Request.RemoteAddr, c.Request.Method, c.Request.URL, time.Since(t))
	}
}