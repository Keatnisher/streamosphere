package api

import (
	"github.com/gin-gonic/gin"
)

// Defines the API handles for server.
func CreateApiHandler() *gin.Engine {
	// Router from gin library that offers logging and routing capabilities.
	router := gin.Default()
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