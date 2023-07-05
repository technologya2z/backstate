package vn.com.pvcombank.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ApiInMapperTest {

    private ApiInMapper apiInMapper;

    @BeforeEach
    public void setUp() {
        apiInMapper = new ApiInMapperImpl();
    }
}
