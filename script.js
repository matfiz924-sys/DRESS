* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Segoe UI', sans-serif; background-color: #f4f4f4; color: #333; line-height: 1.6; }
.container { max-width: 1000px; margin: 0 auto; padding: 20px; }

.header { background: #eccddb; text-align: center; padding: 15px 0; font-weight: bold; }
.promo-badge { color: #d32f2f; font-size: 14px; }

.product { display: flex; flex-wrap: wrap; background: #fff; border-radius: 20px; overflow: hidden; margin-top: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
.product-image { flex: 1; min-width: 300px; }
.product-image img { width: 100%; height: 100%; object-fit: cover; }

.product-info { flex: 1; padding: 40px; min-width: 300px; }
h1 { font-size: 28px; margin-bottom: 15px; }

.price { margin-bottom: 25px; }
.old-price { text-decoration: line-through; color: #888; margin-right: 10px; font-size: 18px; }
.current-price { font-size: 26px; font-weight: bold; color: #e44d26; }

.request-form { display: flex; flex-direction: column; gap: 15px; }
.request-form input, .request-form select { 
    padding: 15px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px; 
}

#submit-btn { 
    padding: 20px; border: none; border-radius: 8px; background: #27ae60; 
    color: #fff; font-weight: bold; cursor: pointer; font-size: 18px; transition: 0.3s;
}
#submit-btn:hover { background: #219150; transform: translateY(-2px); }
.form-note { font-size: 12px; color: #777; margin-top: 10px; text-align: center; }

@media (max-width: 768px) { .product { flex-direction: column; } }
