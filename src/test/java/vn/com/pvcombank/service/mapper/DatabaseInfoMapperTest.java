package vn.com.pvcombank.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class DatabaseInfoMapperTest {

    private DatabaseInfoMapper databaseInfoMapper;

    @BeforeEach
    public void setUp() {
        databaseInfoMapper = new DatabaseInfoMapperImpl();
    }
}
