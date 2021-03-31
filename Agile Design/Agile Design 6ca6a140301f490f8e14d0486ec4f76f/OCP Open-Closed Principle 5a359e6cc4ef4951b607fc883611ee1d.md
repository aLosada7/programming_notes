# OCP: Open-Closed Principle

**Open to extension, but closed for modification**

Instead of modifying old components, create new ones. Maybe this components are being used in other part of the system, and we are creating side-effects

Example

HTTP POST to a REST API. Third library (axios) and infrastructure element (http request).

**Solution**: We can apply structural adapter pattern